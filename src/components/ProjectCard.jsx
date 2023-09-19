import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function ProjectCard(props) {
    const dish = useContext(ThemeContext);
    console.log(dish);
    return (
        <div className="ProjectCard">
            <h3>{props.project.name}</h3>
            <p>{props.project.technologies}</p>
        </div>
    );
}

export default ProjectCard;
