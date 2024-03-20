//main
dom.radio_options[0].checked = true;

// global var : round count
let counter = 0;
let arr = choose_list();

// events
dom.validation_button.addEventListener("click", () => {
    process_input();
});

dom.user_input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && dom.user_input.value !== "") {
        process_input();
    }
});

for (let ind = 0; ind < dom.radio_options.length; ind++) {
    let option = dom.radio_options[ind];

    option.addEventListener("change", (event) => {
        counter = 0;

        if (event.target.value ===  "1") {
            arr = words_array;
            start_game();
        }
        else {
            arr = sentences_array;
            start_game();
        }

        dom.user_input.focus();
    });
}

start_game();