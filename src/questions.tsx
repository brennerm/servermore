import { Answer } from "./models";
import { Question } from "./models";

export const questions = [
    new Question(
        "How quickly does your application start up?",
        [
            new Answer(
                "Slow",
                10,
                "Slow starting applications aren't a great fit for serverless. Launching will happen frequently costing you extra time and money."
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
                "Serverless computing resources are more expensive compared to traditional servers. Be aware of that when planning to run a lot of long term tasks."
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
                "If you can plan your required compute capacity beforehand, running on traditional servers with autoscaling will be cheaper."
            ),
            new Answer(
                "I'm regularly encountering unpredictable traffic spikes.",
                -30,
                "Unpredictable load is where serverless really shines."
            )
        ]
    ),
    new Question(
        "Do you have the option to take care of server maintenance yourself?",
        [
            new Answer(
                "No",
                -30,
                "Going serverless requires you to do no maintenance of servers whatsoever."
            ),
            new Answer(
                "Yes",
                10,
                "If you have the resources, managing your on-premise or cloud servers will give you more freedom in adjusting the environment to your needs."
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
                20,
                "Take into consideration that switching from one serverless provider to another may come with a significant amount of migration work required. The <a href='https://www.serverless.com/' target='_blank' rel='noreferrer'>serverless framework</a> may help you to speed up the migration process."
            ),
            new Answer(
                "Kind of Important",
                10,
                "Take into consideration that switching from one serverless provider to another may come with a significant amount of migration work required. The <a href='https://www.serverless.com/' target='_blank' rel='noreferrer'>serverless framework</a> may help you to speed up the migration process."
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
    ),
    new Question(
        "Is your code stateless?",
        [
            new Answer(
                "Yes",
                -20,
                "This way you can benefit from Serverless' autoscaling out of the box."
            ),
            new Answer(
                "No",
                30,
                "That's something that is required to take advantage of serverless computing. Make sure to extracts all kinds of state into an external component like a database or cache."
            )
        ]
    ),
    new Question(
        "Is your code reading its configuration from environment variables?",
        [
            new Answer(
                "Yes",
                -10,
                "Passing configuration parameters through environment variables is the preferred way of most Serverless providers."
            ),
            new Answer(
                "It does not require any configuration.",
                0,
                null
            ),
            new Answer(
                "No",
                10,
                "You may need to adjust your code in this case. "
            )
        ]
    ),
    new Question(
        "Does your application code exceed the maximum file size of your Serverless provider?",
        [
            new Answer(
                "Yes",
                20,
                "This limit is probably not adjustable which means you need to decrease the size of your application."
            ),
            new Answer(
                "No",
                -5,
                "This way you won't run into problems when deploying your application code to your Serverless provider."
            )
        ]
    )
]