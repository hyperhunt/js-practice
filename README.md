# Осваиваю курс на Udemy

Современный JavaScript + Vue с нуля на реальных проектах. Курс для начинающих разработчиков. Практика на проектах. Домашние задания. Тесты. ES6+, Vue.js, ООП, AJAX, Webpack, Jest.

1. First Name, Last Name (real ones)

Anton Mikhailov

2. Contact Info (add several ways to contact you)

+7 (985) 516-03-73  
tony@hyperhunt.dev

3. Summary (your goal, wishes, reveal what is important for you, what do you want and why.
Some kind of self-presentation. In case of lack of experience  Junior Developer sells his/her potential, his/her passion and ability to learn fast. You shouldn't think that everybody is going to teach you when you come to the workplace. Rather being a Junior means always learning new things from everywhere etc.).

I've started lerning development in Kotlin about half year ago. At the moment I have got an expireince in:

- Development of parsers in Kotlin with Skrape {It}. Collecting data from search results Ya / G, thematic sites, stackoverflow.
Stack: Kotlin, Skrape, JVM, CSV, regular expressions, JSON.

- Development of an app for online translation of texts with quizzes for memorizing words.
Stack: Kotlin, Google API, Reverso DB, language archives (open source).

- Development of a REST server on Kotlin.
Stack: Kotlin, Javalin, JSON, REST API. 

4. Skills (e.g. programming languages, frameworks, methodologies, version control, tools etc.)

Kotlin, Ktor, MVP, Git.

5. Code examples (LATEST).

```Kotlin
import kotlin.random.Random

/*
 * Random generate of phone numbers using Kotlin "Sequence".
 * Template: +7 (000) 000-00-00
 */

fun main() {
    val numberGeneric: Sequence<String> = generateSequence { 
        (Math.random() * 100).toString().takeLast(10)
    }
    
    val phoneTemplate: MutableList<String> = numberGeneric.map {
        val p1 = it.substring(0 , 3)
        val p2 = it.substring(3 , 6)
        val p3 = it.substring(6 , 8)
        val p4 = it.substring(8 , 10)
        val phone = "+7 ($p1) $p2-$p3-$p4"
        phone
    }.take(10).toMutableList()

    phoneTemplate.forEach() { println(it) }
}
```

6. Experience (for a Junior Dev it means all kinds of experience: coding tests, projects from courses,
freelance projects - wherever they had the opportunity to demonstrate skills they have.
Also it would be awesome if you add links to source code)

- Developed hello guide for newbie in Kotlin: [kotlin-helloworld-jar](https://github.com/hyperhunt/kotlin-helloworld-jar)
- Developed Quiz used Data class: [lint-flow-quiz](https://github.com/hyperhunt/lint-flow-quiz/tree/master/app/src/main/java/dev/hyperhunt/lintflowquiz)

7. Education (including courses, seminars, lectures, online learning)

- Practiced on Kotlin course with HyperSkill from JetBrains.
- Studing Kotlin on OTUS course for junior.
- Reading a book "Android for professionals 4th Edition" from Big Nerd Ranch.

8. English (elaborate on what kind of practice you had, if any, how long it lasted and so on)

I don't have any specific education in English, but my level alowes me to read documentation in English and translate tutorials from English to Russian.
