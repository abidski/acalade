import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export function CardsSection() {
    return (
        <div className="grid grid-cols-5 gap-4">
            <Card className="">
                <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="">
                        $1,250.00
                    </CardTitle>
                </CardHeader>
            </Card>

            <Card className="">
                <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="">
                        $1,250.00
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="">
                <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="">
                        $1,250.00
                    </CardTitle>
                </CardHeader>
            </Card>

        </div>


    );

}