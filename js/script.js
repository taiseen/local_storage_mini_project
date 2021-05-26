// 26-May-2021

const themeSelector = document.getElementById('selectTheme');
const btnClear = document.getElementById('btnClear');

// select theme
themeSelector.addEventListener('change', (e) => {

    const theme = e.target.value;
    changeTheme(theme);
    // store user selected theme in localStorage
    localStorage.setItem('theme', theme);

});


// theme changing...
const changeTheme = (theme) => {

    if (theme === 'dark') {
        document.body.style.backgroundColor = '#444';
        document.body.style.color = '#FFF';
    } else if (theme === 'gray') {
        document.body.style.backgroundColor = '#aaa';
        document.body.style.color = '#222';
    } else {
        document.body.style.backgroundColor = '#FFF';
        document.body.style.color = '#222';
    }
};


// other tabs listen this event & sync with current tab
window.addEventListener('storage', (e) => {

    // event only run for this Key
    if (e.key === 'theme') {
        const currentTheme = e.newValue;
        themeSelector.value = currentTheme;
        changeTheme(currentTheme)
    }
});



// after page re-load OR refresh | data will still present
const currentTheme = localStorage.getItem('theme');
themeSelector.value = currentTheme;
changeTheme(currentTheme);



// reset all value by default
btnClear.addEventListener('click', () => {
    localStorage.removeItem('theme');
    changeTheme('light');
    themeSelector.value = 'light';
})