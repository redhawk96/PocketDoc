import { DepartmentEpidemicProfile } from "../models/DepartmentEpidemicProfile"
// tslint:disable: newline-before-return

export function extractEpidemicProfile(profile: any) {
    const eProfile: DepartmentEpidemicProfile = {
        newCases: profile.local_new_cases,
        totalCases: profile.local_total_cases,
        hospitalizedCases: profile.local_total_number_of_individuals_in_hospitals,
        terminatedCases: profile.local_deaths,
        recoveredCases: profile.local_recovered,
        medicalCenters: extractMedicalCenters(profile.hospital_data)
    }
    return eProfile
}

function extractMedicalCenters(centers: []) {
    const extractedMedicalCenters = [];
    centers.forEach(center => {
        extractedMedicalCenters.push(extractMedicalCenterInfo(center));
    })
    return extractedMedicalCenters;
}

function extractMedicalCenterInfo(center: any) {
    const medicalCenter = {
        hospitalizedCases: center.cumulative_local,
        supervisedCases: center.treatment_local,
        centerName: center.hospital.name
    }
    return medicalCenter;
}
