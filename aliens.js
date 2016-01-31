var prompt = require('prompt');
prompt.start();

prompt.get([{
name: 'first_name',
required: true
}, 
'last_name', 
{
name:'age',
message: 'Enter your age (a numeric value)',
pattern: /^[0-9]$/ //numeric required at start of sting 
},
{ 
name:'time_of_siting',
message: 'examples: 12:00AM  12:00 pm  12:00PM  12:00am',
pattern: /^([1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)?$/i //limits to standard time and makes am and pm case insensitive while allowing for white space but requiring string to end with AM or PM is eluding me
},
'sighting_location',
'other_witness',
'description_thoughts'
], function(err, result) {
    
    var report = `FBI aliens sighting report:

    Eye witness name is ${result.first_name} ${result.last_name} at age: ${result.age}
    According to eye witness sighting happened sometime around ${result.time_of_siting} near ${result.sighting_location}
    Another possible witness includes a person by the name of ${result.other_witness}
    The sighting is described as: Some monster thingy and the witness\u0027s initial thoughts are: ${result.description_thoughts}
    This is the witness\u0027s 11th encounter

    Report conclusion: Complete`;

    console.log(report);
});