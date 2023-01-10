// пакет fs відповідає за роботу з файлами
// його не потрібно встановлювати, тому що він встановлений глобально разом з node
// const fs = require("fs");
const fs = require("fs/promises");

// читаємо файл

// Колбек
// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(error);
//     console.log(data);
// })

// Проміси
// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// Окрема функція
const filePath = "./files/file.txt";
const fileOperation = async ({ filePath, action, data }) => {
    switch (action) {
        case "read":
            const text = await fs.readFile(filePath, "utf-8");
            // const buffer = await fs.readFile(filePath);
            // const text = buffer.toString();
            console.log(text);
            break;
        
        case "add":
            const newText = await fs.appendFile(filePath, data);
            console.log(newText); // буде undefined, але у файл запише
            break;
        
        case "replace":
            const replaceText = await fs.writeFile(filePath, data);
            console.log(replaceText); // буде undefined, але у файл запише
            break;
        default:
            "Unknown action";
            
    }
}
// fileOperation({ filePath, action: "read" });
// fileOperation({ filePath, action: "add", data: "\nYou are the Champion!" });
fileOperation({ filePath, action: "replace", data: "Michael"  });