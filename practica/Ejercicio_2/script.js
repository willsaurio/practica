const dragAndDropItems = document.getElementById('team-members');

new Sortable(dragAndDropItems, {
    Animation: 350,
    chosenClass:'team-member-chosen',
    dragClass:'team-member-drag'
});