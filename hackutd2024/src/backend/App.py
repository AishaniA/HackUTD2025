import openai

# Set up your API key (keep this key secure and private)
openai.api_key = "your-openai-api-key"

# Make a request to the GPT model
response = openai.chat.completions.create(
    model="gpt-3.5-turbo",  # Specify the model to use (e.g., gpt-3.5-turbo, gpt-4)
    messages=[
        {"role": "user", "content": "Hello, how do I upload a PDF in HTML?"}
    ]
)

# Print the response from the model
print(response['choices'][0]['message']['content'])