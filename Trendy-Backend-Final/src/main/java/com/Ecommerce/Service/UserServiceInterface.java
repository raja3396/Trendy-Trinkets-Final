package com.Ecommerce.Service;

import com.Ecommerce.DTO.UserDetailsMessageInfo;
import com.Ecommerce.Entity.User;

import java.util.List;

public interface UserServiceInterface {

//    /**
//     * Get a list of all users in the system.
//     *
//     * @return List of User entities
//     */
    List<User> getAllUsers();

    List<UserDetailsMessageInfo> getAllUsersForAdmin();
    public UserDetailsMessageInfo getUserDetailsByCustomerId(Long customerId);
    /**
     * Get user details by user ID.
     *
     * @param userId User ID
//     * @return User entity
//     */
//    User getUserById(Long userId);
//
//    /**
//     * Create a new user.
//     *
//     * @param user User entity to be created
//     */
//    void createUser(User user);
//
//    /**
//     * Update user details.
//     *
//     * @param userId        User ID
//     * @param updatedUser   Updated User entity
//     */
//    void updateUser(Long userId, User updatedUser);
//
//    /**
//     * Delete a user by user ID.
//     *
//     * @param userId User ID
//     */
//    void deleteUser(Long userId);
//
//    /**
//     * Change the password for a user.
//     *
//     * @param userId    User ID
//     * @param newPassword New password
//     */
//    void changePassword(Long userId, String newPassword);
//
//    /**
//     * Search for users based on a keyword (e.g., username or email).
//     *
//     * @param keyword Search keyword
//     * @return List of User entities matching the search criteria
//     */
//    List<User> searchUsers(String keyword);
//
//    /**
//     * Enable or disable a user account.
//     *
//     * @param userId User ID
//     * @param enabled true to enable, false to disable
//     */
//    void toggleUserStatus(Long userId, boolean enabled);
//
//    // Additional user-related methods can be added as per project requirements.
	
}
