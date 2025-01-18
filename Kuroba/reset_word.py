import json

with open ("word_game/storage2.json", "r") as file:
    data = json.load(file)
    file.close()

def main():
    new_data = {key:value for key,value in data.items() if key.isalpha() and isinstance(value, dict) and "frequency" in value and "definitions" in value}
    new_data = {key:value for key,value in new_data.items() if isinstance(value["definitions"], list) and len(value["definitions"]) > 0}
    new_data = {key:value for key,value in new_data.items() if "partOfSpeech" in value["definitions"][0] and value["definitions"][0]["partOfSpeech"] == "noun"}
    new_data = [key for key,value in new_data.items() if isinstance(value["frequency"], dict) and value["frequency"]["perMillion"] > 3]
    new_data = [word for word in new_data if len(word) > 4 and not word.endswith("ing") and not word.endswith("ed") and not ((not word.endswith("ss")) and word.endswith("s"))]
    
    with open ("word_game/storage.json", "w") as file:
        json.dump(new_data, file)
        file.close()
    
if __name__ == "__main__":
    main()