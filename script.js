function onClickButton(el) {
    let field1 = document.getElementsByName("field1");
    let field2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    r.innerHTML = field1[0].value + field2[0].value;
}