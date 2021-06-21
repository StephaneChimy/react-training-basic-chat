import React from "react"
import { formatRelative } from "date-fns"

const Message = ({ createdAt = null, text = "", displayName = "", photoURL = "" }) => {
  return (
    <div class='chat-message'>
      <div class='flex items-end'>
        <div class='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
          <div>
            {displayName ? <p class='text-sm text-gray-900 font-semibold dark:text-white ml-2'>{displayName}</p> : null}
            <p class='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 w-48'>{text}</p>
            {createdAt?.seconds ? (
              <p class='text-sm text-gray-400 dark:text-gray-300 ml-2'>{formatRelative(new Date(createdAt.seconds * 1000), new Date())}</p>
            ) : null}
          </div>
        </div>
        {photoURL ? <img src={photoURL} alt='My profile' class='w-6 h-6 rounded-full order-1' /> : null}
      </div>
    </div>
  )
}

export default Message
