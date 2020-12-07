import { Answer } from "./models";
import { Question } from "./models";

export const questions = [
    new Question(
        "How quickly does your application start up?",
        [
            new Answer(
                "Slow",
                10,
                "Slow starting applications aren't a great fit for serverless as you'll experience these delays during each cold start."
            ),
            new Answer(
                "Fast",
                -10,
                "Fast starting applications result in quick cold starts. 👍"
            )
        ]
    ),
    new Question(
        "Do you plan to execute long running processes?",
        [
            new Answer(
                "Yes",
                20,
                "Running long term tasks serverless will result in higher costs compared to running on a 24/7 server."
            ),
            new Answer(
                "No",
                -20,
                "Serverless is great for executing short-term tasks."
            )
        ]
    ),
    new Question(
        "How predictable is your workload?",
        [
            new Answer(
                "I have a good understand of which load I can expect.",
                10,
                "If you can plan your required compute capacity beforehand, running on traditional servers will be cheaper."
            ),
            new Answer(
                "I'm regularly encountering unpredictable traffic spikes.",
                -10,
                "Unpredictable load is where serverless really shines."
            )
        ]
    ),
    new Question(
        "Do you have resources to take care of server maintenance yourself?",
        [
            new Answer(
                "No",
                10,
                "Going serverless requires you to do no maintenance of servers whatsoever."
            ),
            new Answer(
                "Yes",
                -10,
                "If you have the resources, managing your on-premise or cloud servers is definitely a valid option."
            )
        ]
    ),
    new Question(
        "Is your runtime/programming language being supported by your serverless provider?",
        [
            new Answer(
                "No",
                30,
                "In this case you may need to refactor your application."
            ),
            new Answer(
                "Yes",
                -5,
                "In this case you should be able to run serverless without needing to make too many changes to your application."
            )
        ]
    ),
    new Question(
        "How important is independence from your platform provider to you?",
        [
            new Answer(
                "Very Important",
                10,
                "Take into consideration that switching from one serverless provider to another may come with a significant amount of migration work required."
            ),
            new Answer(
                "Kind of Important",
                5,
                "Take into consideration that switching from one serverless provider to another may come with a significant amount of migration work required."
            ),
            new Answer(
                "Not That Important",
                -5,
                "Good, just keep in mind that serverless often requires adjusting your application to the providers standards."
            ),
            new Answer(
                "Not Important at all",
                -10,
                "Good, just keep in mind that serverless often requires adjusting your application to the providers standards."
            )
        ]
    ),
    new Question(
        "Does your application require GPU compute resources?",
        [
            new Answer(
                "Yes",
                50,
                "Currently there are pretty much no serverless providers with GPU support."
            ),
            new Answer(
                "No",
                -5,
                "In this case you'll be fine going with serverless."
            )
        ]
    )
]