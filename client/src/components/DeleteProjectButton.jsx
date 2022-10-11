import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";


export default function DeleteProjectButton({ projectId }) {
 const navigate = useNavigate();


    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate("/"),
        refetchQueries: [{ query: GET_PROJECTS }],
        // update(cache) {
        // const { projects } = cache.readQuery({ query: GET_PROJECTS });
        // cache.writeQuery({
        //     query: GET_PROJECTS,
        //     data: { projects: projects.filter((p) => p.id !== projectId) },
        // });
        // },
    });
    
    return (
        <button
        className="btn btn-danger btn-sm"
        onClick={() => {
            if (window.confirm("Are you sure you want to delete this project?")) {
            deleteProject();
            }
        }}
        >
            <FaTrash className="mx-1"/>
        Delete
        </button>
    );
}