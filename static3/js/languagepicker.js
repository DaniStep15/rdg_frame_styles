const langPicker = $('#langpicker')
const langList = $('#language-list')
langPicker.hover(
    function() {
        // Fetch the content of languages.html and display it
        langList.removeClass('hidden')
    },
    function() {
        // Hide the list when the mouse is not hovering over the langPicker
        langList.addClass('hidden')
    }
)
langList.hover(
    function() {
        // Fetch the content of languages.html and display it
        langList.removeClass('hidden')
    },
    function() {
        // Hide the list when the mouse is not hovering over the langPicker
        langList.addClass('hidden')
    }
)

function setLanguage(lang) {
    $.ajax({
        url: '/work3/setlanguagecookie',
        type: 'POST',
        data: { lang: lang },
        success: function(result) {
            if (result == 'ok') {
                location.reload()
            }
        },
        failure: function() {
            bootbox.alert('Error setting language')
        }
    })
}
