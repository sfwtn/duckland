function getSubtitle(){
    const messages = ['the duckening', 'frogs', 'i forgor 💀', 'space pirates', 'E', 'object Object', '|  ||  ||  | --', 'a̵̧̧̛̦̳̠͙̟̗̺͍͎̼͍͈͓̤̝͛̅̄̈̓́͘͠͝a̶̖̻̬̲̭̯̺̫̪̠̱̞͂̔̆̊̓͘͝ͅạ̷̡͚͕̤͙̜̜̔̓́͑͛͛̃̕ä̷̢̛̜̤̖̞̗̰͓̣͔̜͉́͌á̷̡̨̰͕̟̟͎͙̠̖̬̮́̐̌̈́̃̅̈́̉͒̏́̇͊̚͝͝ͅa̵͔̗̭͕̮̩͇̺͈̤̍̃̔͐̽͆̏̇̽̀͘̚̚̕͠͠ͅa̸̢̛͔͉̭͓̬͖̼̺̟͔͉͛̄̈̈̑̈́͋̀̆̐̉̇̀͌̇͠a̷̡͙̘̜͈̥̬̫̺̿̔͘ͅa̵̢̧͍̺̩̻͔̳͕̞̗͙͓̮͌̎̍̀̀̊̍̿̂̈́̃́͆͌̄̚̕͜a̴̞͉̺̤̍̓͒͗̽̐͒̐͜͠', 'can probably run in Internet Explorer'];
    const randomIndex = Math.round(Math.random()*messages.length);
    document.getElementById("subtitle").innerHTML = messages[randomIndex];
}