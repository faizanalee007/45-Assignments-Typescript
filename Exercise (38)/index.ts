// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country='Pakistan') //Country parameter is default as Pakistan
{

    console.log(`\n${city} is in ${country}!`)
}


describe_city('Karachi');       //giving the city name but with default country name

describe_city('Hyderabad');     //giving the different city name but with default country name

describe_city('Mekkah', 'Saudi Arab');  //giving the city name and country name both will print different.

