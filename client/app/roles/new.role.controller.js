'use strict';

angular.module('thinkKidsCertificationProgramApp')
  .controller('newRoleCtrl', function ($scope, $http, $location, Heading) {

    Heading.setHeading('Admin Panel > New Role');
    $scope.isInstructor = false;

    $scope.activities = [
      {code: 'view_users', name: 'View users'},
    	{code: 'create_users', name: 'Create users'},
    	{code: 'update_users', name: 'Update users'},
    	{code: 'delete_users', name: 'Delete users'},
    	{code: 'view_forms', name: 'View forms'},
    	{code: 'create_forms', name: 'Create forms'},
    	{code: 'delete_forms', name: 'Delete forms'},
    	{code: 'assign_users', name: 'Assign users to instructors'},
    	{code: 'track_payments', name: 'Track payments'},
    	{code: 'upload_doc', name: 'Upload documents'},
    	{code: 'view_sub', name: 'View submissions'},
    	{code: 'grade_sub', name: 'Grade submissions'},
    	{code: 'fill_forms', name: 'Fill forms'},
    	{code: 'make_payment', name: 'Make payment'},
    	{code: 'de_activate_users', name: 'Activate/deactivate users'},
    	{code: 'reset_passwords', name: 'Reset passwords'},
    	{code: 'reset_password', name: 'Reset my password'},
    	{code: 'edit_role', name: 'Edit role'},
    	{code: 'add_notif', name: 'Add notifications'},
    	{code: 'view_profile', name: 'View profiles'},
    	{code: 'add_class', name: 'Add class'},
    	{code: 'edit_class', name: 'Edit class'},
    	{code: 'edit_detail', name: 'Edit details'},
    	{code: 'message_user', name: 'Message other users'},
    	{code: 'view_feedback', name: 'View feedback'}
    ];

    $scope.saveRole = () => {
      if($scope.role.name === undefined) {
        return;
      }

      const activities = $scope.activities.filter(activity => activity.selected)
          .map(activity => activity = activity.code);

      const role = {
        name: $scope.role.name,
        activities: activities,
        instructor: $scope.isInstructor
      };

      $http.post('/api/roles', role);
      $location.path('/admin');
    };
  });
