function appendValue(val) {
  document.getElementById("result").value += val;
}

function calculate() {
  try {
    document.getElementById("result").value = eval(document.getElementById("result").value);
  } catch {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}
