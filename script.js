function calculate() {

```
var radius = document.getElementById("radius").value;

if (radius == "" || radius <= 0) {
    alert("Please enter a valid radius");
    return;
}

var volume = (4 / 3) * Math.PI * radius * radius * radius;

document.getElementById("volume").value = volume.toFixed(2);
```

}
