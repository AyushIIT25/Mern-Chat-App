import Avatar from "./Avatar";

export default function Contact({id,username,onClick,selected,online}){
    return (
        <div key={id} onClick={() => onClick(id)}
        className={"border-b border-grap-100 flex items-center gap-2 cursor-pointer " + (selected ? "bg-blue-100" : "")}>
        {selected && (
            <div className="w-1 h-12 bg-blue-500 rounded-r-md "></div>
        )}
        <div className="flex gap-2 py-2 pl-4 items-center">
            
            <Avatar online={online} username={username} userId={id} />
            <span className="test-gray-800">{username}</span>
        </div>
    </div>
    );
}