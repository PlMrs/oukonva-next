export type TQuestionnaireData = {
    question : {
        content: string,
        id: number
    };
    answer : {
        oneHand : {
            content : string,
            image: any,
            id: number
        },
        otherHand : {
            content : string,
            image: any,
            id: number
        };
    };
}