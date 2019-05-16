// make dropdowns on the right align right, etc, so they don't go off screen
var dropdown_uls = document.querySelectorAll('#mainNav ul li div')

function fix_dropdowns() {
    for (var i = 0; i < dropdown_uls.length; i++) {
        var ul = dropdown_uls[i]
        var rect = ul.getBoundingClientRect()
        var body = document.body.getBoundingClientRect()
        if (rect.right > body.right) {
            ul.style.left = 'auto'
            ul.style.right = 0
        }
        if (rect.left < body.left) {
            ul.style.left = 0
            ul.style.right = 'auto'
        }
    }
}
fix_dropdowns()
addEventListener('resize', fix_dropdowns)
addEventListener('load', fix_dropdowns)
