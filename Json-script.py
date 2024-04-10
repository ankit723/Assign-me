output_file = "QuestionSet.js"
with open(output_file, "w") as f:
    # f.write("const QuestionSet = [\n")

    start = int(input("Starting id: "))
    end = int(input("Ending id: "))

    for i in range(start, end + 1):
        # title_str = input(f"Enter title for question {i}: ")
        topic_str = input(f"Enter topic for question {i} (default: Differential Equations): ").strip() or "Differential Equations"
        question_type = input(f"Enter question type for question {i} (default: Short): ").strip() or "Short"
        question_level = input(f"Enter question level for question {i} (default: Easy): ").strip() or "Easy"
        question_url = input(f"Enter question URL for question {i}: ")
        print()

        f.write("  {\n")
        f.write(f"    id: {i},\n")
        f.write(f'    title: "mq{i}",\n')
        f.write(f'    questionUrl: "{question_url}",\n')
        f.write(f'    questionType: "{question_type}",\n')
        f.write(f'    questionLevel: "{question_level}",\n')
        f.write(f'    topic: "{topic_str}"\n')

        if i == end:
            f.write("  }\n")
        else:
            f.write("  },\n")

    # f.write("];\n\n")
    # f.write("export default QuestionSet;\n")

print(f"JSON file generated successfully: {output_file}")
