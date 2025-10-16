import google.generativeai as genai
import json

# Set your Gemini API key here
API_KEY = "AIzaSyD0x2jEZp73JOWp1rjBcw7jBYVNHmUVkys"
genai.configure(api_key=API_KEY)

def fetch_from_gemini(user_input):
    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 2500,
    }

    model = genai.GenerativeModel(
        model_name="gemini-2.5-pro        pip install flask google-generativeai python-pptx",
        generation_config=generation_config,
    )

    chat_session = model.start_chat(history=[{"role": "user", "parts": [user_input]}])
    response = chat_session.send_message(user_input)
    return response.text

if __name__ == "__main__":
    project_idea = input("Enter your project/startup idea: ")
    # Prompt for Gemini to return JSON with slides
    prompt = f"""
You are an expert product manager and startup consultant. A user has provided a project idea.\nYour task is to generate the content for a 6-slide presentation deck based on this idea.\nRespond ONLY with a valid JSON object containing a single key 'slides', which is an array of 6 slide objects.\nEach slide object must have a 'title' and 'content' property. The content for each slide should be concise, professional, and formatted in bullet points.\nThe required slide titles are exactly:\n1. Problem Definition\n2. Technical Approach\n3. Impacts and Benefits\n4. Feasibility and Viability\n5. Research Review\n6. Conclusion & Next Steps\nHere is the user's project idea:\n---\n{project_idea}\n---\nRespond ONLY with valid JSON, no explanation, no markdown, no extra text, no code block, no comments, no formatting. Output only the JSON object."""
    result = fetch_from_gemini(prompt)
    print("\nGemini raw response:\n", result)
    # Try to extract JSON from markdown code block or direct output
    import re
    match = re.search(r"```json[\s\S]*?(\{[\s\S]*'slides'[\s\S]*\})[\s\S]*?```", result)
    if match:
        json_str = match.group(1)
    else:
        curly_match = re.search(r"\{[\s\S]*'slides'[\s\S]*\}", result)
        json_str = curly_match.group(0) if curly_match else result
    # Replace single quotes with double quotes for valid JSON
    json_str = json_str.replace("'", '"')
    try:
        slides_obj = json.loads(json_str)
        print("\nSlides JSON:\n", json.dumps(slides_obj, indent=2))
        # Optionally, save to file
        with open("slides.json", "w", encoding="utf-8") as f:
            json.dump(slides_obj, f, indent=2)
        print("\nSlides saved to slides.json")
    except Exception as e:
        print("\nFailed to parse slides JSON:", e)
        print("Raw output:\n", result)
