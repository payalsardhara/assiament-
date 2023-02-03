const slider = document.querySelectorAll('img')
let x = 0
console.log(slider);

slider.forEach(
    (img, index) => {
        img.style.left = `${index * 100}%`
    }
)
const slidersImg = () => {
    slider.forEach(
        (img) => {
            img.style.transform = `translatex(${(x % 5) * 100}%)`
        }
    )
}
const goright = () => {
    x++
    slidersImg()
}
const goleft = () => {
    x--
    slidersImg()
}
