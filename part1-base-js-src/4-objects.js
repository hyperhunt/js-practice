// Objects

const user = {
    firstName: 'Tony',
    age: 42,
    isAdmin: true,
    mail: 'tony@hyperhunt.dev',
    'user-skills': {
        path: 'Developer',
        skills: ['html', 'js', 'css'],
    },
    lang: ['ru', 'en', 'bytecode'],
};

let value;

value = user;
value = user.isAdmin;
value = user['user-skills'].path;
value = user['user-skills'].skills[1];
value = user.lang[2];
value = user.mail;

let prop = 'mail';
value = user[prop]

user.firstName = 'Tony Hunt'
value = user.firstName
user.info = 'Some text'
value = user

user.plan = {}
user.plan.basic = 'basic'

console.log(value);


