const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', function(){
        if(tab.classList.contains('selected')){
            return;
        }
        const tabSelected = document.querySelector('.tab.selected');
        tabSelected.classList.remove('selected')

        tab.classList.add('selected')

        const infoSelected = document.querySelector('.info.selected');
        infoSelected.classList.remove('selected')

        const IdInfoTabs = `info-${tab.id}`

        const ToggledInfo = document.getElementById(IdInfoTabs)
        ToggledInfo.classList.add('selected')
    })
})