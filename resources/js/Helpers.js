import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default function() {
    const toast = useToast({
        timeout: 1000,
        hideProgressBar: true,
        position: "bottom-right",
        closeOnClick: true,
        transition: "Vue-Toastification__fade",
        closeButton: false,
    });

    return {
        toast
    };
}