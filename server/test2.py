"""
Install the Google AI Python SDK

$ pip install google-generativeai

See the getting started guide for more information:
https://ai.google.dev/gemini-api/docs/get-started/python
"""

import os
import time

import google.generativeai as genai

genai.configure(api_key="AIzaSyC0FGAKhVFjr8Is-PEbXqQSvFcaMhaUUv4")

# Create the model
# See https://ai.google.dev/api/python/google/generativeai/GenerativeModel
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

try:
  with open("sample.txt", "r") as file:
    file_content = file.read()
    # print(file_content)
except FileNotFoundError:
  print("Error: File not found!")


def upload_to_gemini(path, mime_type=None):
  """Uploads the given file to Gemini.

  See https://ai.google.dev/gemini-api/docs/prompting_with_media
  """
  file = genai.upload_file(path, mime_type=mime_type)
  print(f"Uploaded file '{file.display_name}' as: {file.uri}")
  return file

def wait_for_files_active(files):
  """Waits for the given files to be active.

  Some files uploaded to the Gemini API need to be processed before they can be
  used as prompt inputs. The status can be seen by querying the file's "state"
  field.

  This implementation uses a simple blocking polling loop. Production code
  should probably employ a more sophisticated approach.
  """
  print("Waiting for file processing...")
  for name in (file.name for file in files):
    file = genai.get_file(name)
    while file.state.name == "PROCESSING":
      print(".", end="", flush=True)
      time.sleep(10)
      file = genai.get_file(name)
    if file.state.name != "ACTIVE":
      raise Exception(f"File {file.name} failed to process")
  print("...all files ready")
  print()

model = genai.GenerativeModel(
  model_name="gemini-1.5-pro",
  generation_config=generation_config,
#   safety_settings = "BLOCK_NONE",
  system_instruction= file_content
  # See https://ai.google.dev/gemini-api/docs/safety-settings
)

files = [
  upload_to_gemini("amazon_laptop_prices_v01.csv", mime_type="text/csv"),
]

# Some files have a processing delay. Wait for them to be ready.
wait_for_files_active(files)

chat_session = model.start_chat(
  history=[
     {
      "role": "user",
      "parts": [
        files[0],
      ],
    }
  ]
)

response = chat_session.send_message("i want a laptop for web development tasks. sugggest me one.")

print(response.text)