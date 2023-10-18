export type ApiChatgptTestResult = {
        country: string,
        description: string,
        points_of_interest: ApiChatgptTestResultPointOfInterest[]
    }

export type ApiChatgptTestResultPointOfInterest = {
    name: string,
    city: string,
    description: string
}