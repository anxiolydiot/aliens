var prompt = require('prompt');
prompt.start();

prompt.get([{
name: 'first_name',
required: true
}, 
'last_name', 
{
name:'age',
pattern: /^[0-9]/
}, 
'time_of_siting',
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