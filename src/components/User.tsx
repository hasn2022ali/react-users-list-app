import { FC } from "react";
import { UserProps } from "../types/User.type"


const User: FC<UserProps> = ({ name, email }) => {
    return (
        <li>
            <div>
                Name: {name.first} {name.last}

            </div>
            <div>
                Email: {email}
            </div>
            <hr />
        </li>
    )
}
export default User;
