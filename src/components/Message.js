import React from "react"
import { formatRelative } from "date-fns"

const Message = ({ createdAt = null, text = "", displayName = "", photoURL = "", uid = "", isUser = null }) => {
  console.log(isUser(uid))
  if (isUser(uid)) {
    return (
      <div class='chat-message'>
        <div class='flex items-start justify-end'>
          <div class='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start text-right'>
            <div>
              {displayName ? <p class='text-sm text-gray-900 font-semibold dark:text-white ml-2'>{displayName}</p> : null}
              <p class='px-4 py-2 rounded-lg inline-block rounded-br-none bg-greenBrand text-gray-50 w-48 shadow-xl'>{text}</p>
              {createdAt?.seconds ? (
                <p class='text-sm text-gray-400 dark:text-gray-300 ml-2'>{formatRelative(new Date(createdAt.seconds * 1000), new Date())}</p>
              ) : null}
            </div>
          </div>
          {photoURL ? <img src={photoURL} alt='My profile' class='w-6 h-6 rounded-full order-2' /> : null}
        </div>
      </div>
    )
  } else {
    return (
      <div class='chat-message'>
        <div class='flex items-center'>
          <div class='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
            <div>
              {displayName ? <p class='text-sm text-gray-900 font-semibold dark:text-white ml-2'>{displayName}</p> : null}
              <p class='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-yellowBrand text-gray-600 w-48 shadow-xl'>{text}</p>
              {createdAt?.seconds ? (
                <p class='text-sm text-gray-400 dark:text-gray-300 ml-2'>{formatRelative(new Date(createdAt.seconds * 1000), new Date())}</p>
              ) : null}
            </div>
          </div>
          {photoURL ? <img src={photoURL} alt='My profile' class='w-10 h-10 rounded-full order-1' /> : null}
        </div>
      </div>
    )
  }
}

export default Message
