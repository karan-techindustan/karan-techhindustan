import { Button } from "@/components/ui/button";

interface THPageHeaderProps {
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
}

export function THPageHeader({
    title,
    description,
    actionLabel,
    onAction,
}: THPageHeaderProps) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h1>

                {description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>

            {actionLabel && (
                <Button type="button" onClick={onAction}>
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}