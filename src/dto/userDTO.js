export const userDTO = {
    id: null,
    userType: null,
    firstName: null,
    lastName: null, 
    userName: null,
    officeEmailId: null,
    mobile: '',
    password: null,
    // confirmPassword: null,
    joiningDate: null,
    consultantType: null,
    position: null,
    dateOfBirth: null,
    status: null,
    language: null,
    customer: null, 
    customerId: null,
    locked: null,
    createdAt: null,
    modifiedAt: null,
    createdBy: null,    
    modifiedBy: null,
};  

export function buildUserDTO(user) {
    console.log("user", user)
    const uDTO = { ...userDTO };
    uDTO.id = user?.id;
    uDTO.userType = user?.userType;
    uDTO.firstName = user?.firstName;
    uDTO.lastName = user?.lastName;
    uDTO.userName = user?.userName;
    uDTO.officeEmailId = user?.officeEmailId;
    uDTO.mobile = user?.mobile;
    uDTO.password = user?.password    ;
    // uDTO.confirmPassword = user?.confirmPassword;
    uDTO.joiningDate = user?.joiningDate;
    uDTO.consultantType =  user?.consultantType;
    uDTO.position = user?.position;
    uDTO.dateOfBirth = user?.dateOfBirth;
    uDTO.status = user?.status;
    uDTO.language = user?.language;
    uDTO.customer = user?.customer;
    uDTO.customerId = user?.customer?.id || user?.customerId;
    uDTO.locked = user?.locked;
    uDTO.createdAt = user?.createdAt;
    uDTO.modifiedAt = user?.modifiedAt;
    uDTO.createdBy = user?.createdBy;
    uDTO.modifiedBy = user?.modifiedBy;
    console.log("uDTO", uDTO)
    return uDTO;
}

export function buildUserListDTO(users) {
    return users.map(user => buildUserDTO(user));
}