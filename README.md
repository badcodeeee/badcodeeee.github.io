# badcodeeee.github.io
<!DOCTYPE html>
<html>
<head>
<title>时间显示</title>
</head>
<body>

<p>点击按钮来显示日期。</p>

<button onclick="displayDate()">时间是？</button>

<script>
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html>
