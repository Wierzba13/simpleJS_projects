const setEditorValue = () => {

const editor = ace.edit("editor");

if (localStorage.getItem("editorCtx") === null) {
    localStorage.setItem("editorCtx", `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #000;
            color: #fff;
        }
        h1 {
            font-size: 2rem;
            text-align: center;
        }
    </style>
</head>
<body>

<h1>Hello! Welcome to our editor!</h1>

<script>
    console.log("Welcome");
</script>
</body>
</html>`);

}

editor.setValue(localStorage.getItem("editorCtx"), 1);
}
export default setEditorValue;