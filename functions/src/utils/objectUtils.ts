export function extractUserInfo(user: any) {
    const userInfo = {
        displayName: user.firstName + " " + user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        photoURL: null,
        providerId: 'password',
        uid: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob,
        nic: user.nic,
        addressInfo: {
            city: user.city
        },
        disabled: false,
        createdOn: new Date().toISOString(),
        updatedOn: new Date().toISOString(),
        userRole: 'PUBLIC',
        preferredMedium: {
            id: 'ENGLISH',
            name: "ENGLISH",
        }
    };
    return userInfo;
}


export function getMinimalUserInfo(user: any) {
    const userInfo = {
        email: user.email,
        phoneNumber: user.phoneNumber,
        uid: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob,
        nic: user.nic,
        city: user.addressInfo.city,
    };
    return userInfo;
}
