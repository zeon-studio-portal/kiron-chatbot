import requests
import json

response = requests.post("  ", headers={"Authorization": "Bearer abc123"}, json=json.dumps([{'role':'user', 'content':'What is happening in Bangladesh'}]))

print("response status - ",response.status_code)

print("response data - ",response.text)