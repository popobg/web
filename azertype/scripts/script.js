// functions helper
function process_input() {
    if (dom.user_input.value === dom.proposition_zone.textContent) {
        increment_score(arr.length);
    }
    update_game_state();
}

function start_game() {
    dom.span_score.innerText = `${0} / ${arr.length}`;
    update_game_state();
}

function choose_list() {
    if (document.querySelector('input[name="option_source"]:checked').value == 1) {
        return words_array;
    }
    else {
        return sentences_array;
    }
}

function update_game_state() {
    dom.user_input.value = "";

    if (counter < arr.length) {
        let computer_word = choose_items(arr);
        dom.proposition_zone.innerText = computer_word;
        dom.validation_button.disabled = false;
        dom.user_input.disabled = false;
    }
    else {
        dom.proposition_zone.innerText = "Le jeu est fini.";
        dom.validation_button.disabled = true;
        dom.user_input.disabled = true;
    }

    counter += 1;
}

function choose_items(choices) {
    /* Math.random() returns a number between [0, 1);
        multiplying by array.length gives a number proportional to the length of the array
        Math.floor() truncate th decimal to the lesser boundary,
        so the number is in the bounds of the array
    */
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function increment_score(total) {
    let score = Number(dom.span_score.innerText[0]);
    score++;
    dom.span_score.innerText = `${score} / ${total}`;
}