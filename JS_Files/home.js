document.addEventListener("DOMContentLoaded", function () {

    const toggleButtonbasic = document.getElementById('togglebasic');
    const basicList = document.getElementById('Basic');

    toggleButtonbasic.addEventListener('click', function () {
        basicList.style.display = (basicList.style.display === 'block') ? 'none' : 'block';
    });

    const toggleButtongrammar = document.getElementById('togglegrammer');
    const grammarlist = document.getElementById('Grammar');

    toggleButtongrammar.addEventListener('click', function () {
        grammarlist.style.display = (grammarlist.style.display === 'block') ? 'none' : 'block';
    });

    const toggleButtonvocabulary = document.getElementById('togglevocabulary');
    const vocabularylist = document.getElementById('Vocabulary');

    toggleButtonvocabulary.addEventListener('click', function () {
        vocabularylist.style.display = (vocabularylist.style.display === 'block') ? 'none' : 'block';
    });

    const toggleButtonPronunciation = document.getElementById('togglePronunciation');
    const Pronunciationlist = document.getElementById('Pronunciation');

    toggleButtonPronunciation.addEventListener('click', function () {
        Pronunciationlist.style.display = (Pronunciationlist.style.display === 'block') ? 'none' : 'block';
    });

    const togglesidebar = document.getElementById('three_line');
    const listsidebar = document.getElementById('sidebar');
    togglesidebar.addEventListener('click', function(){
      listsidebar.style.display = (listsidebar.style.display === 'block') ? 'none' : 'block';
    })    
});




