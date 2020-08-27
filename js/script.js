// 1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.

// 2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

// 3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Usate prima i console.log e poi provare a stampare con jQuery.

// BONUS: Provate ad utilizzare Handlebars.

$(document).ready(function () {
    // 1. Definizione di un nuovo oggetto 'studente' dotato di varie proprietà (coppie "nome/chiave : valore")
    var studente = {
        'nome': 'Alberto',
        'cognome': 'Zordan',
        'eta': 34
    };

    // Stampa delle proprietà usando il ciclo 'for in'
    for (var key in studente) {
        console.log(`${key}: ${studente[key]}`);
    }

    // 2. Creazione di un array di oggetti
    var studenti = [
        {
            'nome': 'Alberto',
            'cognome': 'Zordan',
            'eta': 34,
            'sesso': 'm'
        },
        {
            'nome': 'Marco',
            'cognome': 'Colussi',
            'eta': 32,
            'sesso': 'm'

        },
        {
            'nome': 'Eleonora',
            'cognome': 'Cassani',
            'eta': 29,
            'sesso': 'f'
        }
    ];

    // Stampa delle proprietà dei vari oggetti combinando i cicli 'for in' e 'for'
    for (var i = 0; i < studenti.length; i++) {
        // for (key in studenti[i]) {
        //     console.log(`${key}: ${studenti[i][key]}`);
        // }
        console.log(`${studenti[i].nome} ${studenti[i].cognome}`);
        // console.log(Object.keys(studenti[i])[0]); così ottengo 'nome'. Object.keys è il metodo sull'oggetto built-in 'Object' che recupera le chiavi delle proprietà
    }

    // 3. Inserimento nell'array di un nuovo oggetto studente con le proprietà già viste (tramite prompt)
    // var userName = prompt('Inserisci un nome');
    // var userSurname = prompt('Inserisci un cognome');
    // var userAge = prompt('Inserisci un\'età');

    // studenti.push({
    //     'nome': userName,
    //     'cognome': userSurname,
    //     'eta': userAge
    // });    
    // console.log(studenti);

    // oppure faccio var newStudent = {'nome': prompt('Inserisci il nome'), 'cognome': prompt('Inserisci il cognome'), 'eta': parseInt(prompt('Inserisci l\'età'))} e poi studenti.push(newStudent)    

    // 3. Inserimento nell'array di un nuovo oggetto studente con le proprietà già viste
    // Reset dei campi di input
    $('input, select').val('');

    $('#enter').on('click', function () {
        // Acquisizione dati inseriti
        var userName = $('#name').val();
        var userSurname = $('#surname').val();
        var userAge = $('#age').val();
        var userSex = $('#sex').val();

        // Controllo sugli input e push nell'array del nuovo oggetto 'studente'
        if (userName && userSurname && userAge && userSex) {
            studenti.push({
                'nome': userName,
                'cognome': userSurname,
                'eta': userAge,
                'sesso': userSex
            });

            // Utilizzo del template di Handlebars per appendere l'array di oggetti
            var source = $('#entry-template').html();
            var template = Handlebars.compile(source);

            for (var i = 0; i < studenti.length; i++) {
                var html = template(studenti[i]);
                $('#output').append(html);
            }
        }
    })
});