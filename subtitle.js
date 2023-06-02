function getSubtitle(){
    const messages = [
        'the duckening',
        'frogs',
        'i forgor 💀',
        'space pirates',
        'E',
        'object Object',
        '|  ||  ||  | --',
        'a̵̧̧̛̦̳̠͙̟̗̺͍͎̼͍͈͓̤̝͛̅̄̈̓́͘͠͝a̶̖̻̬̲̭̯̺̫̪̠̱̞͂̔̆̊̓͘͝ͅạ̷̡͚͕̤͙̜̜̔̓́͑͛͛̃̕ä̷̢̛̜̤̖̞̗̰͓̣͔̜͉́͌á̷̡̨̰͕̟̟͎͙̠̖̬̮́̐̌̈́̃̅̈́̉͒̏́̇͊̚͝͝ͅa̵͔̗̭͕̮̩͇̺͈̤̍̃̔͐̽͆̏̇̽̀͘̚̚̕͠͠ͅa̸̢̛͔͉̭͓̬͖̼̺̟͔͉͛̄̈̈̑̈́͋̀̆̐̉̇̀͌̇͠a̷̡͙̘̜͈̥̬̫̺̿̔͘ͅa̵̢̧͍̺̩̻͔̳͕̞̗͙͓̮͌̎̍̀̀̊̍̿̂̈́̃́͆͌̄̚̕͜a̴̞͉̺̤̍̓͒͗̽̐͒̐͜͠',
        'can probably run in Internet Explorer',
        'Blood for the Blood God',
        'quack for your life',
        'greetings traveller',
        'i made this instead of studying for exam',
        'consider sleeping',
        'smol duck',
        'no regrets',
        'highly illegal',
        'use DuckDuckGo'
        ];
    const randomIndex = Math.round(Math.random()*messages.length);
    document.getElementById("subtitle").innerHTML = messages[randomIndex];
}
