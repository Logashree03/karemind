export default function Stats() {
   
    return (
        <div className="stats container py-10">
            <div className="stats-item flex flex-row justify-around items-center gap-5">
                <div className="Stats-title flex flex-col items-center bg-blue-100 p-4 rounded-lg" >
                    <h1>10K+</h1>
                    <p>Active Users</p>
                </div>

                <div className="Stats-title flex flex-col items-center bg-blue-100 p-4 rounded-lg" >
                    <h1>500</h1>
                    <p>Healthcare  Facilities</p>
                </div> 

                <div className="Stats-title flex flex-col items-center bg-blue-100 p-4 rounded-lg" >
                    <h1>99.9%</h1>
                    <p>System Uptime</p>
                </div>

            </div>
        </div>
    );
}