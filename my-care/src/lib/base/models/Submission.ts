export interface Submission {
    questionnaire: {
        questions: SubmissionQuestion[]
    },
    epidemic: {
        id: string
    },
    user: {
        email: string,
        addressInfo: {
            city: {
                id: string;
            }
            geoLocation: {
                longitude: string,
                latitude: string
            }
        }
    }
}

export interface SubmissionQuestion {
    id : string;
    option : string;
}
