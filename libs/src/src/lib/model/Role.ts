export interface Role {
    id: string;
    name: string;
    description?: string | null;
    disabled?: boolean | false;
    roleLevel: number;
    allowedPermissions: Permission[];
    createdOn: Date;
    updatedOn: Date;
}

export interface Permission {
    id: string; // collection name as id
    name: string;
    view: boolean;
    edit: boolean;
}