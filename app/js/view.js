$(document).on('load', () => {
    loadOut();
    setTimeout(() => {
        console.log('it does work')
    }, 1000)
})


!function(){ // this gets ignored
    console.log('this sends')

    $(document).ready(() => {
        $('#changer').on('click', function(){
            $('.red').toggleClass('clicked') // this doesn't work
        })
    })
}()