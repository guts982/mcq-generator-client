
interface IMCQResponse {
        "questions":
            {
                "id":number;
                "question":string;
                "a":string;
                "b":string;
                "c":string;
                "d":string;
            }[];
        "answers":
            {
                "id":number;
                "option":string;
                "question":string;
                "answer":string;
            }[];
        "input":string
    }

