import LoadingComponent from "@/components/Loading"

export default function Loading() {
    return (
        <div className="w-full h-[90vh] bg-background">
            <LoadingComponent className="!h-auto" />
        </div>
    )
}